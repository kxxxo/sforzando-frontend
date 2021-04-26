export default class HttpConfig {
	static domain = 'http://sforzando-backend.kxxo.ru/';
	static get_last_3_competition_url = this.domain + '/site/get-competitions?page=1&count=3';
	static get_last_10_competition_url = this.domain + '/site/get-competitions?page=1&count=10';
	static get_last_10_competition_with_results_url = this.domain + '/site/get-competitions?page=1&count=10&result=1';
	static get_judges_url = this.domain + '/site/get-judges';
	static create_application_url = this.domain + '/site/create-application'


	static yandex_public_key = "https://disk.yandex.ru/d/fl9HjZNmB6tlgg";
	static yandex_oauth_key = "AQAAAAAir43hAAcVuNLQ56U6o0RQqS2oTdawyCQ";
	static yandex_disk_get_directory = "https://cloud-api.yandex.net/v1/disk/public/resources?limit=100&public_key="+this.yandex_public_key;
}
