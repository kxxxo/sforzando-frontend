export default class HttpConfig {
	static domain = 'http://localhost:82';

	static getLast3CompetitionUrl = `${this.domain}/site/get-competitions?page=1&count=3`;

	static getLast10CompetitionUrl = `${this.domain}/site/get-competitions?page=1&count=10`;

	static getLast10CompetitionWithResultsUrl = `${this.domain}/site/get-competitions?page=1&count=10&result=1`;

	static getJudgesUrl = `${this.domain}/site/get-judges`;

	static createApplicationUrl = `${this.domain}/site/create-application`;

	static getGalleryUrl = `${this.domain}/site/get-gallery`;
}
