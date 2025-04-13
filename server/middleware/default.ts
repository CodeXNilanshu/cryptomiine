export default defineEventHandler((event) => {
  // This is just a passthrough middleware to ensure server routing works
  console.log('Request received:', event.path);
});
