<template>
	<div>
    	<!-- for 문 -->
    	<ul>
        	<li v-for="n in numbers" v-bind:key="numbers">{{n}}</li>
        </ul>
        
        <!-- for문 사용하면서 if문 조건식이 필요할 때 -->
        <ul>
        	<li v-for="n in numbers" v-bind:key="numbers">
            	<template v-if="n%2===0">  <!-- 짝수만 노출 -->
            	{{n}}
                </template>
            </li>
        </ul>
    </div>
</template>
