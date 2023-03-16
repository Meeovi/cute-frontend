import { useOneTap } from 'vue3-google-signin';

useOneTap({
  onSuccess: (response) => {
    console.log("Success:", response);
  },
  onError: () => console.error("Error with One Tap Login")
});
//# sourceMappingURL=google.mjs.map
