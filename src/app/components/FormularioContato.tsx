"use client";

import React, { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function FormularioContato() {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    const form = e.target as HTMLFormElement;

    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const numero = (form.elements.namedItem("numero") as HTMLInputElement)?.value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim();

    if (!name || !email || !numero || !message) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return;
    }

    setIsLoading(true);

    const formDataConverted = {
      nome: name,
      email,
      numero,
      mensagem: message,
    };

    try {
      const response = await fetch("/api/agendar", {
        method: "POST",
        body: JSON.stringify(formDataConverted),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();

      if (result) {
        setSuccessMessage("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        form.reset();
      } else {
        setErrorMessage("Erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      setErrorMessage("Erro ao enviar. Verifique sua conexão.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3.5 bg-white border border-cream-300 rounded-xl text-ink-900 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-400 transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMessage && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}
      {successMessage && (
        <div className="flex items-start gap-3 p-4 bg-sage-50 border border-sage-200 rounded-xl text-sage-600 text-sm">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>{successMessage}</span>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-ink-700 mb-2 uppercase tracking-wider">
            Nome
          </label>
          <input id="name" type="text" name="name" placeholder="Seu nome" className={inputClass} />
        </div>
        <div>
          <label htmlFor="numero" className="block text-xs font-semibold text-ink-700 mb-2 uppercase tracking-wider">
            Telefone
          </label>
          <input id="numero" type="text" name="numero" placeholder="(31) 9 9999-9999" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-ink-700 mb-2 uppercase tracking-wider">
          E-mail
        </label>
        <input id="email" type="email" name="email" placeholder="seu@email.com" className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-ink-700 mb-2 uppercase tracking-wider">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Como podemos ajudar você e seu pet?"
          rows={5}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full inline-flex items-center justify-center gap-2 px-7 py-4 text-white font-semibold rounded-full shadow-soft transition-all duration-300 ${
          isLoading
            ? "bg-ink-400 cursor-not-allowed"
            : "bg-brand-600 hover:bg-brand-700 hover:shadow-soft-lg hover:-translate-y-0.5"
        }`}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Enviando...</span>
          </>
        ) : (
          <>
            <span>Enviar mensagem</span>
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
