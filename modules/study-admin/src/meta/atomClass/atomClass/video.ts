export default {
  info: {
    bean: 'video',
    title: 'Video',
    model: 'video',
    tableName: 'studyVideo',
    language: false,
    category: false,
    tag: false,
    comment: false,
    attachment: false,
    history: false,
    flow: {
      stage: 'draft',
    },
    fields: {
      dicts: {
        atomState: {
          draft: {
            dictKey: null,
          },
        },
      },
    },
    layout: {
      config: {
        // atomList: 'layoutAtomListVideo',
      },
    },
  },
  actions: {},
  validator: 'video',
  search: {
    validator: 'videoSearch',
  },
};
