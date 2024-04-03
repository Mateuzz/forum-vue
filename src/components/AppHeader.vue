<script setup>

</script>

<template>
    <header :class="$style.header">
        <div :class="$style.container">
            <div :class="$style['logo-wrapper']">
                <img :class="$style.logo" src="@img/main_icon.webp" width="100px">
            </div>
        
            <nav :class="$style.nav">
                <ul :class="$style['nav-list']">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/home">Posts</a></li>
                    <li><a href="/home">Members</a></li>
                    <li><a href="/home">About us</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style module>
.logo-wrapper {
    width: 4em;
}


.nav-list {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    justify-content: space-between;
    border: 1px solid black;
    border-radius: 0.2em;
}

.nav-list li {

}

.nav-list a {
    display: block;
    padding: 1em 0;
}
</style>