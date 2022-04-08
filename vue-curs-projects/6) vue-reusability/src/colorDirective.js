let interval;

export default {
  mounted(el, binding) {
    el.style[binding.arg] = binding.value;
    if (binding.modifiers.blink) {
      interval = setInterval(() => {
        el.style.color = el.style.color === "red" ? "green" : "red";
      }, 1000);
    }
    if (binding.modifiers.hover) {
      el.addEventListener("mouseenter", () => {
        el.style.color = "blue";
      });
      el.addEventListener("mouseleave", () => {
        el.style.color = "red";
      });
    }
  },
  updated(el, binding) {
    el.style[binding.arg] = binding.value;
  },
  unmounted() {
    console.log("unmounted");
    if (interval) {
      clearInterval(interval);
    }
  },
};
