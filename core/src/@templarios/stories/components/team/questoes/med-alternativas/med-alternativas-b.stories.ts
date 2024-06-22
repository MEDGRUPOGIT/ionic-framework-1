import { html } from "lit-html";
import { withDesign } from "storybook-addon-designs";
import { MedColors } from "../../../../../templarios";
import { modalController } from "../../../../../../../dist/ionic/index.esm";

export default {
  title: "Components/Team/Questões/Alternativas/Skins/Skin B",
  decorators: [withDesign],
};

const Template = ({ alternativas, dsColor }) => {
  const id = Math.random().toString(36).substr(2, 9);

  setTimeout(() => {
    const alternativasEl: any = document.getElementById(id);

    for (const key in alternativas) {
      alternativasEl[key] = alternativas[key];
    }
  }, 0);

  const createModal = async (imagemUrl) => {
    modalController
      .create({
        component: "med-image-zoom",
        cssClass: "med-image-zoom",
        componentProps: {
          imagens: [
            {
              src: imagemUrl,
              legenda: "",
            },
          ],
        },
      })
      .then((modal) => {
        modal.present();
      });
  };

  window.addEventListener("medGalleryRequest", (e) => {
    createModal(e?.detail?.Imagem);
  });

  return html`
    <ion-app>
      <ion-content>
        <!-- component markdown -->
        <med-alternativas-b
          id=${id}
          .dsColor=${dsColor}
          @click="${createModal}"
        ></med-alternativas-b>
        <!-- component markdown -->
      </ion-content>
    </ion-app>
  `;
};

export const SkinB = Template.bind({});
SkinB.parameters = {
  design: {
    type: "figma",
    url: "",
  },
  actions: {
    handles: ["medChange", "medClick", "medGalleryRequest", "medRiscada"],
  },
};
SkinB.argTypes = {
  alternativas: {
    control: { type: "array" },
    description: "Define a listagem de alternativas.",
    defaultValue: {
      alternativas: [
        {
          Alternativa: "A",
          Enunciado:
            "Enunciado B Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.",
          Imagem: "https://via.placeholder.com/500",
          Porcentagem: 0.55,
          Riscada: true,
        },
        {
          Alternativa: "B",
          Enunciado:
            "Enunciado B Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.",
          Imagem: null,
          Porcentagem: 0.55,
        },
        {
          Alternativa: "C",
          Enunciado:
            "Enunciado C Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.",
          Imagem: "https://via.placeholder.com/500",
          Porcentagem: 0.3,
        },
        {
          Alternativa: "D",
          Enunciado:
            "Enunciado D Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.",
          Imagem: null,
          Porcentagem: 0.05,
        },
        {
          Alternativa: "E",
          Enunciado:
            "Enunciado E Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Dolores quae repellendus quidem nam.",
          Imagem: "https://via.placeholder.com/500",
          Porcentagem: 0,
        },
      ],
      alternativaSelecionada: null,
      respostaCorreta: "C",
      mostraResposta: true,
      permiteRiscar: true,
      mostrarProgressBar: true,
    },
    table: {
      type: { summary: "MedAlternativasInterface" },
      defaultValue: { summary: "undefined" },
    },
  },
  dsColor: {
    options: Object.values(MedColors),
    control: { type: "select" },
    description: "Define a cor do componente.",
    table: {
      type: { summary: Object.values(MedColors).join(" |") },
      defaultValue: { summary: "undefined" },
    },
  },
};
