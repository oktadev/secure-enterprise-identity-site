export default {
  domain:
    process.env.VERCEL_TARGET_ENV === 'production'
      ? '019809ec-c66d-7bed-80ff-6a78a282f723'
      : '019809ec-c66d-7bed-80ff-6a78a282f723-test',

  adobeTag:
    process.env.VERCEL_TARGET_ENV === 'production'
      ? 'https://assets.adobedtm.com/6bb3f7663515/fea558f43eb7/launch-be034d63605e.min.js'
      : 'https://assets.adobedtm.com/6bb3f7663515/fea558f43eb7/launch-e7dc4271fcde-development.min.js'
}
