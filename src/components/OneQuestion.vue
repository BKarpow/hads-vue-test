<template>
	<div class="w-100">
		<div class="w-100">
			<strong>{{ question.question }}</strong>
			<ol class="list-group">
				<li
					class="list-group-item"
					v-for="reply in question.replies"
					:key="reply.bal"
					@click="
						replyFunc({
							numberQuestion: question.number_question,
							bal: reply.bal,
						})
					"
				>
					{{ reply.reply }}
				</li>
			</ol>
		</div>
	</div>
</template>

<script>
	/* eslint-disable */
	export default {
		name: "OneQuestion",
		props: {
			question: Object,
		},
		methods: {
			replyFunc(rep) {
				this.$emit("reply:do", rep);
			},
		},
	};
</script>

<style scoped>
	strong {
		display: block;
		padding: 1rem;
		font-size: 1.8rem;
		font-weight: bold;
	}
	li {
		cursor: pointer;
		padding: 1rem;
		font-size: 1.5rem;
		font-weight: bold;
		margin: 0.1rem;
		border: 1px solid #383838 !important;
		border-radius: 12px;
		background: #111;
		color: white;
		transition: all 0.8s;
	}
	li:hover {
		background: white;
		color: #111;
	}
</style>
