package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/alugar_filme.feature",
        glue = "domain",
        tags = {},
        plugin = {"pretty", "html:target/report-html", "json:target/report-json/"}
        )
public class AlugarFilmeRunner {
}
