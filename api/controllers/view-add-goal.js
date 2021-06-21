module.exports = {


  friendlyName: 'View add goal',


  description: 'Display "Add goal" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/add-goal'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
