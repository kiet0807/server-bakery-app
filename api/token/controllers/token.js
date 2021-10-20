"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    const userReal = await strapi.services.token.findOne({
      user: ctx.state.user.id,
    });
    if (userReal) {
      return userReal.user;
    } else {
      const userReal = await strapi.services.token.create({
        user: ctx.state.user.id,
      });
      return userReal.user;
    }
  },
};
