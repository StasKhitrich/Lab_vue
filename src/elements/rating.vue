<template>
    <div class="rating_wrapper">
        <form action="#">
            <div class="form_item">
                <div class="form_label">Rating:</div>
                <div class="rating">
                    <div class="rating_items">
                        <input id="rating_5" type="radio" class="rating_item"
                        name="rating" value="5">
                        <label for="rating_5" class="rating_label"></label>

                        <input id="rating_4" type="radio" class="rating_item"
                        name="rating" checked value="4">
                        <label for="rating_4" class="rating_label"></label>

                        <input id="rating_3" type="radio" class="rating_item"
                        name="rating" value="3">
                        <label for="rating_3" class="rating_label"></label>

                        <input id="rating_2" type="radio" class="rating_item"
                        name="rating" value="2">
                        <label for="rating_2" class="rating_label"></label>

                        <input id="rating_1" type="radio" class="rating_item"
                        name="rating" value="1">
                        <label for="rating_1" class="rating_label"></label>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: 'Rating'
}
</script>

<style lang="scss">
.rating_wrapper {
    border: 1px solid black;
    min-width: 200px;
    padding: 12px;
    margin: 0 auto;
    border-radius: 6px;
}
.rating {
    position: relative;
    font-size: 40px;
    display: inline-block;
}
.rating::before {
    content: "★★★★★";
    display: block;
}
.rating_items {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row-reverse;
    overflow: hidden;
}
.rating_item {
    position: absolute;
    width: 0%;
    height: 0%;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
}
.rating_label {
    flex: 0 0 20%;
    height: 100%;
    cursor: pointer;
}
.rating_label::before {
    content: "★";
    display: block;
    transition: color 0.3s ease 0s;
}

.rating_item:checked,
.rating_item:checked ~ .rating_label {
    color: #f7e13e;
}

.rating_label:hover,
.rating_label:hover ~ .rating_label,
.rating_label:checked ~ .rating_label:hover {
    color: #f7e13e;
}
</style>
