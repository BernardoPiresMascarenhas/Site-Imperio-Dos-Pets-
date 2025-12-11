import React from "react";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Fabiana",
      relation: "Tutora do Titico",
      text: "Titico é assíduo no banho, tosa e atendimentos veterinários. Equipe muito atenciosa, cuidadosa, confiável. Eu atravesso a cidade para levá-lo para o banho semanal e vacinas. Confio de olhos fechados.",
    },
    {
      name: "Larissa",
      relation: "Tutora do Cookie",
      text: "Sem dúvida, a Império dos Pets é a melhor clínica veterinária! Meu cachorro já foi tomar banho em alguns pet shops antes e ele sempre ia cheio de medo, quando conhecemos a Império dos Pets, ele passou a ir super tranquilo e feliz. O carinho e o cuidado são diferenciados!!",
    },
    {
      name: "Tatiana",
      relation: "Tutora do Luke",
      text: "Fiquei muito satisfeita com a consulta do meu filhote neste local. O veterinário foi muito atencioso e dedicou tempo para explicar tudo sobre a saúde do meu pet. Recomendo demais!",
    },
    {
      name: "Priscila",
      relation: "Tutora da Panqueca",
      text: "Melhor clínica do mundo!!! Atenciosos, carinhosos e hiper responsáveis. Minha cachorrinha é cliente antiga e é apaixonada por todos da clínica. Só tenho elogios e agradecimento a todos que trabalham lá!!!",
    }
  ];

  return (
    <section className="py-20 bg-white" id="depoimentos">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Título da Seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#7e22ce] drop-shadow flex flex-col items-center justify-center gap-2">
            <span>O que dizem os clientes</span>
            {/* Detalhe sublinhado em roxo */}
            <div className="w-24 h-1 bg-[#7e22ce] rounded-full mt-2"></div>
          </h2>
        </div>

        {/* Grid dos Depoimentos */}
        {/* Ajustado para md:grid-cols-2 para ficar simétrico com 4 itens */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-[#f3e8ff] p-8 rounded-2xl shadow-lg border border-[#7e22ce]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Ícone de Aspas */}
              <div className="absolute -top-4 -left-2 bg-white p-2 rounded-full shadow-md">
                <Quote className="text-[#7e22ce] w-6 h-6 fill-[#7e22ce]" />
              </div>

              <div>
                {/* Estrelas */}
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" stroke="none" />
                  ))}
                </div>

                {/* Texto */}
                <p className="text-gray-700 italic mb-6 leading-relaxed text-sm lg:text-base">
                  "{review.text}"
                </p>
              </div>

              {/* Autor */}
              <div className="border-t border-[#7e22ce]/20 pt-4 mt-auto">
                <p className="font-bold text-[#7e22ce] text-lg">{review.name}</p>
                <p className="text-xs text-gray-600 uppercase tracking-wide font-medium">{review.relation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;