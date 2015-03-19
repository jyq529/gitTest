package guoren.xintianyou.web.core.sitemesh;

import org.sitemesh.SiteMeshContext;
import org.sitemesh.content.ContentProperty;
import org.sitemesh.content.tagrules.TagRuleBundle;
import org.sitemesh.content.tagrules.html.ExportTagToContentRule;
import org.sitemesh.tagprocessor.State;

public class FooterTagRuleBundle implements TagRuleBundle {

	@Override
	public void cleanUp(State arg0, ContentProperty arg1, SiteMeshContext arg2) {
		// TODO Auto-generated method stub

	}

	@Override
	public void install(State defaultState, ContentProperty contentProperty,
			SiteMeshContext siteMeshContext) {
		// TODO Auto-generated method stub
		defaultState.addRule("footer_body", new ExportTagToContentRule(
				contentProperty.getChild("footer_body"), false));
		defaultState.addRule("title_area", new ExportTagToContentRule(
				contentProperty.getChild("title_area"), false));
		defaultState.addRule("query_area", new ExportTagToContentRule(
				contentProperty.getChild("query_area"), false));
		defaultState.addRule("query_button_area", new ExportTagToContentRule(
				contentProperty.getChild("query_button_area"), false));
		defaultState.addRule("grid_area", new ExportTagToContentRule(
				contentProperty.getChild("grid_area"), false));
		defaultState.addRule("modal_area_content", new ExportTagToContentRule(
				contentProperty.getChild("modal_area_content"), false));
		defaultState.addRule("modal_area_button", new ExportTagToContentRule(
				contentProperty.getChild("modal_area_button"), false));
		defaultState.addRule("modal_area_header", new ExportTagToContentRule(
				contentProperty.getChild("modal_area_header"), false));
		defaultState.addRule("modal_area_others", new ExportTagToContentRule(
				contentProperty.getChild("modal_area_others"), false));
		defaultState.addRule("query_area_2", new ExportTagToContentRule(
				contentProperty.getChild("query_area_2"), false));
		defaultState.addRule("grid_page_area", new ExportTagToContentRule(
				contentProperty.getChild("grid_page_area"), false));
		defaultState.addRule("grid_footer_area", new ExportTagToContentRule(
				contentProperty.getChild("grid_footer_area"), false));
		defaultState.addRule("edit_area", new ExportTagToContentRule(
				contentProperty.getChild("edit_area"), false));
		defaultState.addRule("tabs_area", new ExportTagToContentRule(
				contentProperty.getChild("tabs_area"), false));
		defaultState.addRule("group_area", new ExportTagToContentRule(
				contentProperty.getChild("group_area"), false));
		defaultState.addRule("js_area", new ExportTagToContentRule(
				contentProperty.getChild("js_area"), false));
		defaultState.addRule("query_area1", new ExportTagToContentRule(
				contentProperty.getChild("query_area1"), false));
		defaultState.addRule("query_button_area1", new ExportTagToContentRule(
				contentProperty.getChild("query_button_area1"), false));
		defaultState.addRule("tabs_area_title", new ExportTagToContentRule(
				contentProperty.getChild("tabs_area_title"), false));
		defaultState.addRule("grid_area1", new ExportTagToContentRule(
				contentProperty.getChild("grid_area1"), false));
		defaultState.addRule("grid_page_area1", new ExportTagToContentRule(
				contentProperty.getChild("grid_page_area1"), false));

		defaultState.addRule("query_area2", new ExportTagToContentRule(
				contentProperty.getChild("query_area2"), false));
		defaultState.addRule("query_button_area2", new ExportTagToContentRule(
				contentProperty.getChild("query_button_area2"), false));
		defaultState.addRule("grid_area2", new ExportTagToContentRule(
				contentProperty.getChild("grid_area2"), false));
		defaultState.addRule("grid_page_area2", new ExportTagToContentRule(
				contentProperty.getChild("grid_page_area2"), false));
		
		defaultState.addRule("static1", new ExportTagToContentRule(
				contentProperty.getChild("static1"), false));
		defaultState.addRule("static2", new ExportTagToContentRule(
				contentProperty.getChild("static2"), false));
		defaultState.addRule("static3", new ExportTagToContentRule(
				contentProperty.getChild("static3"), false));
		defaultState.addRule("static4", new ExportTagToContentRule(
				contentProperty.getChild("static4"), false));
		defaultState.addRule("chart1_title", new ExportTagToContentRule(
				contentProperty.getChild("chart1_title"), false));
		defaultState.addRule("chart2_title", new ExportTagToContentRule(
				contentProperty.getChild("chart2_title"), false));
		defaultState.addRule("chart1", new ExportTagToContentRule(
				contentProperty.getChild("chart1"), false));
		defaultState.addRule("chart2", new ExportTagToContentRule(
				contentProperty.getChild("chart2"), false));
	}

}
