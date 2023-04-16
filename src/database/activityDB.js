const Activity = require('./activities')
const slugify = require('slugify')

exports.save = async function(jsonBody){
    Activity.create({
        title: jsonBody.title,
        slug: slugify(jsonBody.title),
        detail: jsonBody.detail,
    }).then(() => {
        return "ok"
    }).catch((error) => {
        throw error
    })
}