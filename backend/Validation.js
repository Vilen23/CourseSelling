const zod = require('zod')

const valid = zod.object({
    email:zod.string().email(),
    username:zod.string(),
    password:zod.string()
})

module.exports={
    valid
}