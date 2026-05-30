var ProductPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var title = entry.getIn(['data', 'title']) || "Nazwa produktu";
    var price = entry.getIn(['data', 'price']) || "0.00";
    
    // Pobieramy obrazek przez funkcję getAsset (ważne dla podglądu)
    var image = entry.getIn(['data', 'image']);
    var bgImage = this.props.getAsset(image);

    return h('div', { className: 'category-section', style: { padding: '20px', background: '#121212' } },
      h('div', { className: 'products-grid' },
        h('div', { className: 'product-card' },
          h('div', { className: 'image-container' },
            // Jeśli obrazek istnieje, wyświetlamy go, jeśli nie - zostawiamy puste
            bgImage ? h('img', { src: bgImage.toString() }) : null
          ),
          h('div', { className: 'product-info' },
            h('span', { className: 'product-category-label' }, 'NOWOŚĆ'),
            h('h3', { className: 'product-name' }, title),
            h('div', { className: 'product-price' }, price + " zł")
          )
        )
      )
    );
  }
});

CMS.registerPreviewTemplate("products", ProductPreview);