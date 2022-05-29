<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a @click.prevent="$emit('toggle')" href="#">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{ date }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="dropdown"
          >
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <a href="#" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </a>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      date: this.$filters.dateFilter(),
      interval: null,
    };
  },
  mounted() {
    console.log(this.$filters);
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      alignment: "right",
      constrainWidth: false,
      coverTrigger: false,
      hover: false,
      inDuration: 300,
      outDuration: 225,
    });
    this.interval = setInterval(() => {
      this.date = this.$filters.dateFilter();
    }, 1000);
  },
  methods: {
    logout() {
      this.$router.push("/login?message=logout");
      // this.$store.dispatch("logout");
    },
  },
  beforeUnmount() {
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy();
    }
    clearInterval(this.interval);
  },
};
</script>

<style></style>
