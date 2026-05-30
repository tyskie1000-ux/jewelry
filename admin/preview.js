var ProductPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var title = entry.getIn(['data', 'title']) || "Nazwa produktu";
    var price = entry.getIn(['data', 'price']) || "0.00";
    
    var image = entry.getIn(['data', 'image']);
    var imageUrl = this.props.getAsset(image);

    // Używamy klas z Twojego style.css!
    return h('div', { className: 'category-section', style: {padding: '20px'} },
      h('div', { className: 'products-grid' },
        h('div', { className: 'product-card' },
          h('div', { className: 'image-container' },
            imageUrl ? h('img', { src: imageUrl.toString() }) : null
          ),
          h('div', { className: 'product-info' },
            h('h3', { className: 'product-name' }, title),
            h('div', { className: 'product-price' }, price + " zł")
          )
        )
      )
    );
  }
});
CMS.registerPreviewTemplate("products", ProductPreview);