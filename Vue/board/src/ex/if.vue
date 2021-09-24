<template>
<div>
	<!-- if 문 -->
	<div v-if="[조건]">
		<p>if문 조건이 맞으면 노출합니다.</p>
	</div>
        
	<!-- if-else 문 -->
	<div v-if="[조건]">
		<p>if문 조건이 맞으면 노출합니다.</p>
	</div>
	<div v-if-else="[else 조건]">
		<p>else if문 조건이 맞으면 노출합니다.</p>
	</div>
	<div v-else>
		<p>일치하는 조건이 없으면 노출합니다.</p>
	</div>    
</div>
</template>