const schemas: any = {};
// video
schemas.video = {
  type: 'object',
  properties: {
    atomName: {
      type: 'string',
      ebType: 'text',
      ebTitle: 'Name',
      notEmpty: true,
    },
    description: {
      type: 'string',
      ebType: 'text',
      ebTitle: 'Description',
    },
  },
};
// video search
schemas.videoSearch = {
  type: 'object',
  properties: {
    description: {
      type: 'string',
      ebType: 'text',
      ebTitle: 'Description',
    },
  },
};
export default schemas;
