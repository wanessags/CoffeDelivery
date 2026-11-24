export interface AddressLookup {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
}

export type CepErrorKind = "invalid" | "not-found" | "network" | "unexpected";

export class CepError extends Error {
  readonly kind: CepErrorKind;

  constructor(
    message: string,
    kind: CepErrorKind,
  ) {
    super(message);
    this.name = "CepError";
    this.kind = kind;
  }
}

export function onlyDigits(value: string): string {
  return value.replace(/\D/g, "");
}

export function isValidCep(value: string): boolean {
  return /^\d{5}-?\d{3}$/.test(value);
}

export function maskCep(value: string): string {
  const digits = onlyDigits(value).slice(0, 8);
  if (digits.length <= 5) return digits;
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

export async function fetchAddress(
  cep: string,
  signal?: AbortSignal,
): Promise<AddressLookup> {
  const digits = onlyDigits(cep);

  if (!isValidCep(cep)) {
    throw new CepError("Informe um CEP válido.", "invalid");
  }

  let response: Response;

  try {
    response = await fetch(`https://viacep.com.br/ws/${digits}/json/`, {
      signal,
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") throw error;
    throw new CepError(
      "Não foi possível consultar o CEP. Tente novamente.",
      "network",
    );
  }

  if (!response.ok) {
    throw new CepError(
      "Não foi possível consultar o CEP. Tente novamente.",
      "network",
    );
  }

  let payload: unknown;

  try {
    payload = await response.json();
  } catch {
    throw new CepError("A resposta do CEP não pôde ser lida.", "unexpected");
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    throw new CepError("A resposta do CEP é inválida.", "unexpected");
  }

  const data = payload as Record<string, unknown>;
  if (data.erro === true || data.erro === "true") {
    throw new CepError("CEP não encontrado.", "not-found");
  }

  if (typeof data.localidade !== "string" || typeof data.uf !== "string") {
    throw new CepError("A resposta do CEP é inválida.", "unexpected");
  }

  return {
    street: typeof data.logradouro === "string" ? data.logradouro : "",
    neighborhood: typeof data.bairro === "string" ? data.bairro : "",
    city: data.localidade,
    state: data.uf,
  };
}
