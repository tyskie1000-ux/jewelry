var ProductPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var title = entry.getIn(['data', 'title']) || "Nazwa produktu";
    var price = entry.getIn(['data', 'price']) || "0.00";
    var isNew = entry.getIn(['data', 'is_new']); // Pobieramy wartość prawda/fałsz
    
    var image = entry.getIn(['data', 'image']);
    var bgImage = this.props.getAsset(image);

    return h('div', { className: 'category-section', style: { padding: '20px', background: '#121212' } },
      h('div', { className: 'products-grid' },
        h('div', { className: 'product-card' },
          h('div', { className: 'image-container' },
            h('div', { className: 'wishlist-icon' }, '♡'),
            bgImage ? h('img', { src: bgImage.toString() }) : null
          ),
          h('div', { className: 'product-info' },
            // Tutaj sprawdzamy, czy pokazać napis NOWOŚĆ
            isNew ? h('span', { className: 'product-category-label' }, 'NOWOŚĆ') : null,
            h('h3', { className: 'product-name' }, title),
            h('div', { className: 'product-price' }, price + " zł")
          )
        )
      )
    );
  }
});

CMS.registerPreviewTemplate("products", ProductPreview);