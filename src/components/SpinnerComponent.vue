<template>
  <div class="spinner"></div>
</template>

<script>
export default {
  name: 'SpinnerComponent',
};
</script>

<style scoped>
.spinner {
  border: 4px solid #3ba58a;
  border-radius: 50%;
  border-left-color: transparent;
  width: 36px;
  height: 36px;
  animation: spin 1s linear infinite;
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  margin: auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
