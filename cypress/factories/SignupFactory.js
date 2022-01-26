var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

  deliver: function () {

    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

    var data = {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: '1199999-9999',
      address: {
        postalcode: '02733-100',
        street: 'Rua Tucunduva',
        number: '222',
        details: 'Casa 2',
        district: 'Vila São Vicente',
        city_state: 'São Paulo/SP',
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpg',
    }
    return data
  }
}
