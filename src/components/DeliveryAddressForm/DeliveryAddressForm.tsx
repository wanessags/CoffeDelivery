import { useEffect, useState } from "react";
import { MapPinLine } from "@phosphor-icons/react";
import { useFormContext, useWatch } from "react-hook-form";
import type { AddressFormValues } from "../../schemas/checkoutSchema";
import { fetchAddress, isValidCep, maskCep } from "../../utils/cep";

const autofillFields = ["street", "neighborhood", "city", "state"] as const;

const addressFields = [
  { name: "street", label: "Rua", autoComplete: "address-line1" },
  { name: "number", label: "Número", autoComplete: "off" },
  { name: "complement", label: "Complemento (opcional)", autoComplete: "address-line2" },
  { name: "neighborhood", label: "Bairro", autoComplete: "address-level3" },
  { name: "city", label: "Cidade", autoComplete: "address-level2" },
  { name: "state", label: "UF", autoComplete: "address-level1" },
] as const;

interface CepStatus {
  request: string;
  kind: "success" | "error";
  message: string;
}

export function DeliveryAddressForm() {
  const {
    control, register, getValues, setValue, formState: { errors },
  } = useFormContext<AddressFormValues>();
  const cep = useWatch({ control, name: "cep" });
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState<CepStatus>();
  const request = `${cep}:${attempt}`;
  const status = result?.request === request ? result : undefined;
  const validCep = isValidCep(cep);
  const cepInput = register("cep");

  useEffect(() => {
    if (!validCep) return;

    const controller = new AbortController();
    let active = true;
    const previous = getValues();

    void fetchAddress(cep, controller.signal).then((address) => {
      if (!active || getValues("cep") !== cep) return;

      const filled = autofillFields.filter((field) => {
        if (!address[field] || getValues(field) !== previous[field]) return false;
        setValue(field, address[field], { shouldValidate: true });
        return true;
      });

      setResult({
        request,
        kind: "success",
        message: filled.length
          ? "CEP consultado. Confira e complete o endereço."
          : "CEP consultado. Complete os campos manualmente.",
      });
    }).catch((error: unknown) => {
      if (!active || getValues("cep") !== cep) return;
      const message = error instanceof Error ? error.message : "Falha na consulta do CEP.";
      setResult({ request, kind: "error", message });
    });

    return () => {
      active = false;
      controller.abort();
    };
  }, [cep, getValues, request, setValue, validCep]);

  return (
    <section className="delivery-card" aria-labelledby="delivery-address-title">
      <div className="delivery-card-heading">
        <MapPinLine size={22} aria-hidden="true" />
        <div>
          <h2 id="delivery-address-title">Endereço de entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </div>
      <div className="delivery-fields">
        <div className="delivery-field delivery-field--cep">
          <label htmlFor="delivery-cep">CEP</label>
          <input
            {...cepInput}
            id="delivery-cep"
            inputMode="numeric"
            autoComplete="postal-code"
            placeholder="00000-000"
            maxLength={9}
            required
            aria-invalid={Boolean(errors.cep || status?.kind === "error")}
            aria-describedby={`delivery-cep-status${errors.cep ? " delivery-cep-error" : ""}`}
            onChange={(event) => {
              setValue("cep", maskCep(event.target.value), {
                shouldDirty: true,
                shouldValidate: Boolean(errors.cep),
              });
              setAttempt((current) => current + 1);
            }}
          />
          {errors.cep && <span id="delivery-cep-error" role="alert">{errors.cep.message}</span>}
          <p id="delivery-cep-status" role="status" data-kind={status?.kind}>
            {validCep && (status?.message ?? "Consultando CEP…")}
          </p>
          {status?.kind === "error" && (
            <button type="button" onClick={() => setAttempt((current) => current + 1)}>
              Tentar novamente
            </button>
          )}
        </div>

        {addressFields.map(({ name, label, autoComplete }) => (
          <div key={name} className={`delivery-field delivery-field--${name}`}>
            <label htmlFor={`delivery-${name}`}>{label}</label>
            <input
              {...register(name)}
              id={`delivery-${name}`}
              autoComplete={autoComplete}
              required={name !== "complement"}
              maxLength={name === "state" ? 2 : undefined}
              aria-invalid={Boolean(errors[name])}
              aria-describedby={errors[name] ? `delivery-${name}-error` : undefined}
            />
            {errors[name] && (
              <span id={`delivery-${name}-error`} role="alert">{errors[name]?.message}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
