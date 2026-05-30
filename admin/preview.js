// Tworzymy komponent podglądu
var ProductPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var title = entry.getIn(['data', 'title']) || "Nazwa produktu";
    var price = entry.getIn(['data', 'price']) || "0.00";
    var category = entry.getIn(['data', 'category']) || "Brak kategorii";
    
    // Pobieramy obrazek (obsługa przesyłania w locie)
    var image = entry.getIn(['data', 'image']);
    var imageUrl = this.props.getAsset(image);

    // Zwracamy HTML, który wygląda tak samo jak na Twojej stronie
    return h('div', { style: { padding: '20px', background: '#0a2a22', minHeight: '100vh' } },
      h('div', { className: 'product-card', style: { border: '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '250px', background: 'white', color: 'black', margin: '0 auto' } },
        imageUrl ? h('img', { src: imageUrl.toString(), style: { width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px' } }) : null,
        h('h3', { style: { margin: '10px 0' } }, title),
        h('p', {}, h('strong', {}, 'Cena: '), price + " zł"),
        h('div', { style: { fontSize: '0.9em', marginBottom: '10px' } }, this.props.widgetFor('body')),
        h('span', { style: { background: '#008080', color: 'white', padding: '4px 10px', fontSize: '12px', borderRadius: '10px' } }, category)
      )
    );
  }
});

// Rejestrujemy ten podgląd dla kolekcji "products"
CMS.registerPreviewTemplate("products", ProductPreview);