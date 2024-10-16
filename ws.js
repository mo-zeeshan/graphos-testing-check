// const Handlebars = require('handlebars');

// function replaceShortcodes(inputString, variables) {
//     const template = Handlebars.compile(inputString);
//     return template(variables);
// }

// // Example usage:
// const inputString = "This is a string for {{user.firstName}} {{content.title}} {{lastName}} for school";
// const variables = {
//     user: { firstName: "Mohd" },
//     content: { title: "APAC 20 banks" },
//     lasName:"shan"
// };

// const outputString = replaceShortcodes(inputString, variables);
// console.log(outputString);

const Mustache = require('mustache');

function replaceShortcodes(inputString, variables) {
    return Mustache.render(inputString, variables);
}

// Example usage:
const inputString = "This is a string for {{user.firstName}} {{content.title}} in  {{lastName}}";
const variables = {
    user: { firstName: "Mohd" },
    content: { title: "APAC 20 banks" },
    lastName:"shan"
};

const outputString = replaceShortcodes(inputString, variables);
console.log(outputString);




/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// const notificationEmail = (firstName: string, lastName: string, template: string) => {
//   template = template?.replace('{{firstName}}', firstName)
//   template = template?.replace('{{lastName}}', lastName)

//   return template
// }

// export default notificationEmail



// firstName: user?.dataValues?.firstName,
        // lastName: user?.dataValues?.lastName,
        // username: user?.dataValues?.username,
        // email: user?.dataValues?.email,
        // imageUrl: user?.dataValues?.imageUrl,
        // publicMetadata: user?.dataValues?.publicMetadata,