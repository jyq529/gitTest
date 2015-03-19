package guoren.xintianyou.web.dto;


/**
 * @author yuanqi.jing 返回消息模板DTO
 */
public class ValidMessageDto {

	private boolean valid; // 消息状态
	private String msg; // 消息提示
	private String fieldId; //
	private Object data; // 消息数据
	private String code;

	public boolean isValid() {
		return valid;
	}

	public void setValid(boolean valid) {
		this.valid = valid;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	public String getFieldId() {
		return fieldId;
	}

	public void setFieldId(String fieldId) {
		this.fieldId = fieldId;
	}


	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

}
