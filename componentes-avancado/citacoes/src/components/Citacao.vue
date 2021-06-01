<template>
    <div class="citacao">
        <slot name="fonte"></slot>
        <slot></slot>
        <div id="autor">
            <slot id="autor" name="autor"></slot>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .citacao {
        height: 300px;
        max-width: 450px;
        background-color: rgba(0, 0, 0, .1);
        border: 1px solid #DDD;
        padding: 25px;
        margin-bottom: 10px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #autor {
        font-size: 13px;
    }
</style>
