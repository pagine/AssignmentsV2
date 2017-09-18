export default class Response {
	constructor(msg, code) {
		this.msg = msg;
		this.code = code;
	}

	toJSON() {
	  return {
	  	msg: this.msg,
	  	code: this.code
	  } 
	}
}
