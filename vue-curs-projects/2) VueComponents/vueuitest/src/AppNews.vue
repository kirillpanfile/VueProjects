<template>
  <div class="w-2/3 mx-auto my-2 bg-gray-50 p-2 text-sm">
    <h3>{{ title }}</h3>
    <app-button @action="open" color="border-2 text-black px-4 py-2">
      {{ !newOpen ? "Open" : "Close" }}
    </app-button>
    <div v-if="newOpen">
      <p>
        {{ title }}
      </p>
      <app-button
        v-if="!read"
        @action="mark"
        color="bg-blue-400 text-white px-4 py-2 text-sm rounded-sm"
      >
        Read
      </app-button>
      <app-button
        v-else
        @action="
          {
            read = false;
            this.newOpen = false;
            $emit('unread-news');
          }
        "
        color="bg-blue-400 text-white px-4 py-2 text-sm rounded-sm"
      >
        Unread
      </app-button>
    </div>
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";
export default {
  // emits: ["open-news"],
  // props: ["title"],
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(value) {
        return value === true || value === false;
      },
    },
  },

  emits: {
    "open-news": null,
    "read-news": null,
    "unread-news": null,
  },
  data() {
    return {
      newOpen: this.isOpen,
      read: false,
    };
  },
  methods: {
    open() {
      this.newOpen = !this.newOpen;
      this.newOpen === true ? this.$emit("open-news") : void 0;
    },
    mark() {
      if (!this.read) {
        this.read = !this.read;
        this.$emit("read-news");
      }
      this.newOpen = false;
    },
  },
  components: { AppButton },
};
</script>  

