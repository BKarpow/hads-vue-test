<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-8">
				<h2>{{ testData.nameTest }}</h2>
				<h3 class="my-2">Шкала тривоги та депресіі. (HADS)</h3>
				<h5>{{ questionNumberCounter }}: питання.</h5>
				<OneQuestion
					:question="thisQuestion"
					@reply:do="newReply"
					v-if="!showResult"
				/>
				<div class="alert alert-success" v-if="showResult">
					<strong>
						<h4>Ваші результати:</h4>
						Депреcія: {{ balDep }} - ( {{ interpretationDep }} ), <br />
						Тривога: {{ balTri }} - ( {{ interpretationTri }} ).
						<div class="mt-2">
							<h4>Всього балів: {{ sumAllBals }}</h4>
						</div>
						<div class="mt-2">
							<button
								class="btn btn-success btn-sm"
								type="button"
								@click="defState()"
							>
								Пройти ще раз.
							</button>
						</div>
					</strong>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// import HelloWorld from "./components/HelloWorld.vue";
	import testData from "./testData";
	import OneQuestion from "./components/OneQuestion.vue";

	export default {
		name: "App",
		components: {
			OneQuestion,
		},
		computed: {
			thisQuestion() {
				return this.testData.data[this.questionIndex];
			},
			sumAllBals() {
				return this.balDep + this.balTri;
			},
			interpretationTri() {
				let resultText = "";
				if (this.balTri <= 7) {
					resultText = "Рівень в нормі!";
				} else if (this.balTri > 7 && this.balTri < 11) {
					resultText = "Субклінічний рівень, варто звернутись до спеціаліста!";
				} else if (this.balTri > 11) {
					resultText = "Клінічний рівень, звернітся до лікаря!";
				} else {
					resultText = "Результат не опрацьовано.";
				}
				return resultText;
			},
			interpretationDep() {
				let resultText = "";
				if (this.balDep <= 7) {
					resultText = "Рівень в нормі!";
				} else if (this.balDep > 7 && this.balDep < 11) {
					resultText = "Субклінічний рівень, варто звернутись до спеціаліста!";
				} else if (this.balDep > 11) {
					resultText = "Клінічний рівень, звернітся до лікаря!";
				} else {
					resultText = "Результат не опрацьовано.";
				}
				return resultText;
			},
			questionNumberCounter() {
				return `${this.questionIndex + 1}/${this.testData.data.length}`;
			},
		},
		data() {
			return {
				testData: testData,
				questionIndex: 0,
				balDep: 0,
				balTri: 0,
				showResult: false,
			};
		},
		methods: {
			defState() {
				this.questionIndex = 0;
				this.balDep = 0;
				this.balTri = 0;
				this.showResult = false;
			},
			newReply(q) {
				if (q.numberQuestion % 2 !== 0) {
					this.balTri += Number(q.bal);
				} else {
					this.balDep += Number(q.bal);
				}
				if (this.questionIndex === this.testData.data.length - 1) {
					this.showResult = true;
					return;
				}
				setTimeout(() => {
					this.questionIndex++;
				}, 1000);
			},
		},
	};
</script>
