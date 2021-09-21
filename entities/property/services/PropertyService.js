const {Image, Property} = require('../../../database/initializer');
const InvalidParamError = require('../../../errors/InvalidParamError');

class PropertyService {
  async create(property, images) {
    const createdProp = await Property.create(property);
    console.log(images);
    if (images.length > 0) {
      this.addImages(createdProp.id, images);
    }
    return createdProp;
  }

  async addImages(id, images) {
    const property = Property.findByPk(id, {
      include: [{model: Image, as: 'Images'}],
    });
    for (const image of images) {
      const img = await Image.create({path: image.filename});
      await img.setProperty(property);
    }
  }

  async getAll() {
    const props = await Property.findAll({
      include: [{model: Image, as: 'Images'}],
    });
    if (!props) {
      throw new EmptyDatabaseError('Ainda não existem imóveis cadastrados');
    }
    return props;
  }

  async getByID(id) {
    const property = await Property.findByPk(id, {
      include: [{model: Image, as: 'Images'}],
    });
    if (!property) {
      throw new InvalidParamError('Não existe um imóvel com este ID');
    }
    return property;
  }

  async update(id, newDetails) {
    const property = await Property.findByPk(id);
    if (!property) {
      throw new InvalidParamError('Não existe um imóvel com este ID');
    }
    const updatedPro = await property.update(newDetails);
    return updatedPro;
  }
}

module.exports = new PropertyService();
