paypal.Buttons({
  style: {
    layout: "vertical",
    color: "blue",
    shape: "rect",
    label: "paypal"
  },
  createOrder: function (data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          currency_code: "USD",
          value: "100.00",
        }
      }]
    });
  }
}).render("#application");