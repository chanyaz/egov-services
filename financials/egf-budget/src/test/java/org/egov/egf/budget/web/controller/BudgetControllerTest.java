package org.egov.egf.budget.web.controller;

import static org.mockito.Matchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.egov.common.contract.request.RequestInfo;
import org.egov.common.domain.model.Pagination;
import org.egov.egf.budget.TestConfiguration;
import org.egov.egf.budget.domain.model.Budget;
import org.egov.egf.budget.domain.model.BudgetSearch;
import org.egov.egf.budget.domain.model.EstimationType;
import org.egov.egf.budget.domain.service.BudgetService;
import org.egov.egf.budget.utils.RequestJsonReader;
import org.egov.egf.budget.web.contract.BudgetRequest;
import org.egov.egf.master.web.contract.FinancialYearContract;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.validation.BindingResult;

@RunWith(SpringRunner.class)
@WebMvcTest(BudgetController.class)
@Import(TestConfiguration.class)
public class BudgetControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private BudgetService budgetService;

    @Captor
    private ArgumentCaptor<BudgetRequest> captor;

    private final RequestJsonReader resources = new RequestJsonReader();

    @Test
    public void test_create() throws IOException, Exception {

        when(budgetService.create(any(List.class), any(BindingResult.class), any(RequestInfo.class)))
                .thenReturn(getBudgets());

        mockMvc.perform(
                post("/budgets/_create").content(resources.readRequest("budget/budget_create_valid_request.json"))
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().is(201)).andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(content().json(resources.readResponse("budget/budget_create_valid_response.json")));

    }

    @Test
    public void test_create_error() throws IOException, Exception {

        when(budgetService.create(any(List.class), any(BindingResult.class), any(RequestInfo.class)))
                .thenReturn(getBudgets());

        mockMvc.perform(
                post("/budgets/_create").content(resources.readRequest("budget/budget_create_invalid_field_value.json"))
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().is5xxServerError());

    }

    @Test
    public void test_update() throws IOException, Exception {

        final List<Budget> budgets = getBudgets();
        budgets.get(0).setId("1");

        when(budgetService.update(any(List.class), any(BindingResult.class), any(RequestInfo.class)))
                .thenReturn(budgets);

        mockMvc.perform(
                post("/budgets/_update").content(resources.readRequest("budget/budget_update_valid_request.json"))
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().is(201)).andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(content().json(resources.readResponse("budget/budget_update_valid_response.json")));

    }

    @Test
    public void test_update_error() throws IOException, Exception {

        when(budgetService.update(any(List.class), any(BindingResult.class), any(RequestInfo.class)))
                .thenReturn(getBudgets());

        mockMvc.perform(
                post("/budgets/_update").content(resources.readRequest("budget/budget_create_invalid_field_value.json"))
                        .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(status().is5xxServerError());

    }

    @Test
    public void test_search() throws IOException, Exception {

        final Pagination<Budget> page = new Pagination<>();
        page.setTotalPages(1);
        page.setTotalResults(1);
        page.setCurrentPage(0);
        page.setPagedData(getBudgets());
        page.getPagedData().get(0).setId("1");

        when(budgetService.search(any(BudgetSearch.class))).thenReturn(page);

        mockMvc.perform(post("/budgets/_search").content(resources.getRequestInfo())
                .contentType(MediaType.APPLICATION_JSON_UTF8)).andExpect(status().is(200))
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(content().json(resources.readResponse("budget/budget_search_valid_response.json")));

    }

    /*
     * @Test public void test_create_400() throws IOException, Exception { BindingResult errors=new
     * BeanPropertyBindingResult(null, null); errors.addError(new ObjectError("sample", "sample")); CustomBindException
     * customBindException = new CustomBindException(errors); when(budgetService.save(any(List.class), any(BindingResult.class),
     * any(String.class))).thenThrow(customBindException); mockMvc.perform(post("/budgets/_create").content(resources.readRequest(
     * "budget/budget_create_valid_request.json")) .contentType(MediaType.APPLICATION_JSON_UTF8)).andExpect(status().
     * is4xxClientError()) .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
     * .andExpect(content().json(resources.readErrorResponse( "common/error_response.json"))); }
     */

    private List<Budget> getBudgets() {
        final List<Budget> budgets = new ArrayList<Budget>();
        final Budget budget = Budget.builder().name("test")
                .financialYear(FinancialYearContract.builder().finYearRange("2017-18").build())
                .estimationType(EstimationType.BE).primaryBudget(false).build();
        budget.setTenantId("default");
        budgets.add(budget);
        return budgets;
    }

}