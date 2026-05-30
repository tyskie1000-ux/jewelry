var ProductPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var title = entry.getIn(['data', 'title']) || "Nazwa produktu";
    var price = entry.getIn(['data', 'price']) || "0.00";
    var category = entry.getIn(['data', 'category']) || "Brak kategorii";
    
    var image = entry.getIn(['data', 'image']);
    var imageUrl = this.props.getAsset(image);

    // Renderujemy podgląd pasujący do nowego stylu CSS
    return h('div', { style: { background: '#121212', padding: '40px', minHeight: '100vh', display: 'flex', justifyContent: 'center' } },
      h('div', { className: 'product-card', style: { width: '250px' } },
        h('div', { 
          style: { 
            background: 'white', 
            aspectRatio: '1/1', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            marginBottom: '15px',
            position: 'relative'
          } 
        },
          h('div', { style: { position: 'absolute', top: '10px', right: '10px', color: '#333' } }, '♡'),
          imageUrl ? h('img', { src: imageUrl.toString(), style: { maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' } }) : null
        ),
        h('div', { style: { textAlign: 'left' } },
          h('span', { style: { fontSize: '0.7rem', color: '#888', textTransform: 'uppercase' } }, 'NOWOŚĆ'),
          h('h3', { style: { fontSize: '0.9rem', color: '#ccc', margin: '5px 0', fontWeight: '400' } }, title),
          h('div', { style: { fontSize: '1.1rem', color: 'white', fontWeight: 'bold' } }, price + " zł")
        )
      )
    );
  }
});

CMS.registerPreviewTemplate("products", ProductPreview);