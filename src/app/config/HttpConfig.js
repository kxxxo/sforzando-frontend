export default class HttpConfig {
	static domain = 'http://sforzando-backend.kxxo.ru/';

	static getLast3CompetitionUrl = `${this.domain}/site/get-competitions?page=1&count=3`;

	static getLast10CompetitionUrl = `${this.domain}/site/get-competitions?page=1&count=10`;

	static getLast10CompetitionWithResultsUrl = `${this.domain}/site/get-competitions?page=1&count=10&result=1`;

	static getJudgesUrl = `${this.domain}/site/get-judges`;

	static createApplicationUrl = `${this.domain}/site/create-application`

	static yandexPublicKey = "https://disk.yandex.ru/d/fl9HjZNmB6tlgg";

	static yandexOauthKey = "AQAAAAAir43hAAcVuNLQ56U6o0RQqS2oTdawyCQ";

	static yandexDiskGetDirectory = `https://cloud-api.yandex.net/v1/disk/public/resources?limit=100&public_key=${this.yandexPublicKey}`;
}
