//regras gerais: não pode escolher uma roupa e uma fantasia por baixo; 
//não pode escolher mais de um extra;

const showcaseAssets = document.querySelectorAll('.showcase img');
const baseAsset = document.querySelectorAll('.base-option');

const previewBase = document.getElementById('preview-base');
const previewHeadphone = document.getElementById('preview-headphone');
const previewBag = document.getElementById('preview-bag');
const previewHoodie = document.getElementById('preview-hoodie');
const previewDress = document.getElementById('preview-dress');
const previewCostumes = document.getElementById('preview-costumes');
const previewExtras = document.getElementById('preview-extras');
const previewBow = document.getElementById('preview-bow');

const showcase = {
  miffy: document.getElementById('miffy-showcase'),
};

let currentBase = null;

function updateLayer(category, src) {
  const layerMap = {
    base: previewBase,
    headphone: previewHeadphone,
    bag: previewBag,
    hoodie: previewHoodie,
    dress: previewDress,
    costume: previewCostumes,
    extras: previewExtras,
    bow: previewBow
  };

  const layer = layerMap[category];

  if (layer) {
    if (layer.src === src) {
      layer.src = '';
      layer.style.display = 'none';
    } else {
      layer.src = src;
      layer.style.display = 'block';
    }
  }
}

function resetPreview() {
  [previewBase, previewHeadphone, previewBag,
    previewHoodie, previewDress, previewCostumes,
    previewExtras, previewBow].forEach(
      (layer) => {
        layer.src = '';
        layer.style.display = 'none';
      }
    );
}

function handleBaseSelection(baseName, imgSrc) {
  if (currentBase !== baseName) {
    currentBase = baseName;
    previewBase.src = imgSrc;
    previewBase.style.display = 'block';
    resetPreview();
    Object.values(showcase).forEach((showcaseItem) => {
      showcaseItem.style.display = 'none';
    });

    showcase[baseName].style.display = 'block';
  }
}

baseAsset.forEach((img) => {
  img.addEventListener('click', () => {
    const imgSrc = img.src;

    previewBase.src = imgSrc;

    previewBase.style.display = 'block';
  });
});

showcaseAssets.forEach((img) => {
  img.addEventListener('click', () => {
    const category = img.classList[0];
    const imgSrc = img.src;
    updateLayer(category, imgSrc);
  });
});

// Exibição das opções de base
document.addEventListener("DOMContentLoaded", function () {
  const baseOptions = document.querySelectorAll(".base-option");
  const bxCustom = document.getElementById("base-custom");

  baseOptions.forEach(option => {
    option.addEventListener("click", () => {
      bxCustom.style.display = "flex";
    });
  });
});

function showCategory(category, event) {
  const categories = document.querySelectorAll('.category');
  categories.forEach(cat => cat.classList.remove('active'));

  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => btn.classList.remove('active'));

  document.getElementById(category).classList.add('active');
  event.target.classList.add('active');
}
