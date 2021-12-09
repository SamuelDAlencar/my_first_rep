const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPersonV = Object.values(order)[3].delivery.deliveryPerson;
  const orderNameV = Object.values(order)[0];
  const telV = Object.values(order)[1];
  const streetV = Object.values(order)[2].street;
  const numberV = Object.values(order)[2].number;
  const apartmentV = Object.values(order)[2].apartment;

  console.log(`Olá ${deliveryPersonV}, entrega para: ${orderNameV}, Telefone: ${telV}, R.${streetV}, N:${numberV}, AP: ${apartmentV}`);

};

customerInfo(order);

const orderModifier = (order) => {
  const newOrder = Object.assign({}, order);

  newOrder.name = 'Luiz Silva'
  newOrder.payment = { total: 50 }

  console.log(`Olá ${newOrder.name}, o total do seu pedido de ${Object.keys(newOrder.order.pizza)[0]}, ${Object.keys(newOrder.order.pizza)[1]} e ${newOrder.order.drinks.coke.type} é R$ ${newOrder.payment.total},00`)
};

orderModifier(order);
