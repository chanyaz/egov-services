/*
 * eGov suite of products aim to improve the internal efficiency,transparency,
 *    accountability and the service delivery of the government  organizations.
 *
 *     Copyright (C) <2015>  eGovernments Foundation
 *
 *     The updated version of eGov suite of products as by eGovernments Foundation
 *     is available at http://www.egovernments.org
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program. If not, see http://www.gnu.org/licenses/ or
 *     http://www.gnu.org/licenses/gpl.html .
 *
 *     In addition to the terms of the GPL license to be adhered to in using this
 *     program, the following additional terms are to be complied with:
 *
 *         1) All versions of this program, verbatim or modified must carry this
 *            Legal Notice.
 *
 *         2) Any misrepresentation of the origin of the material is prohibited. It
 *            is required that all modified versions of this material be marked in
 *            reasonable ways as different from the original version.
 *
 *         3) This license does not grant any rights to any user of the program
 *            with regards to rights under trademark law for use of the trade names
 *            or trademarks of eGovernments Foundation.
 *
 *   In case of any queries, you can reach eGovernments Foundation at contact@egovernments.org.
 */
package org.egov.wcms.repository.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.egov.wcms.model.MeterWaterRates;
import org.egov.wcms.model.Slab;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

@Component
public class MeterWaterRatesRowMapper implements RowMapper<MeterWaterRates> {

    @Override
    public MeterWaterRates mapRow(final ResultSet rs, final int rowNum) throws SQLException {
        final MeterWaterRates meterWaterRates = new MeterWaterRates();
        meterWaterRates.setId(rs.getLong("meterwater_id"));
        meterWaterRates.setCode(rs.getString("meterwater_code"));
        meterWaterRates.setBillingType(rs.getString("billingtype"));
        meterWaterRates.setUsageTypeId(rs.getString("meterwater_usagetypeid"));
        meterWaterRates.setSubUsageTypeId(rs.getString("meterwater_subusagetypeid"));
        meterWaterRates.setSourceTypeId(rs.getLong("meterwater_sourcetypeid"));
        meterWaterRates.setPipeSizeId(rs.getLong("meterwater_pipesizeId"));
        meterWaterRates.setActive(rs.getBoolean("meterwater_active"));
        meterWaterRates.setFromDate(rs.getLong("meterwater_fromdate"));
        meterWaterRates.setToDate(rs.getLong("meterwater_todate"));
        meterWaterRates.setActive(rs.getBoolean("meterwater_active"));
        meterWaterRates.setTenantId(rs.getString("meterwater_tenantId"));
        meterWaterRates.setPipeSize(rs.getDouble("pipesize_sizeinmm"));
        meterWaterRates.setSourceTypeName(rs.getString("watersource_name"));
        final Slab slab = new Slab();
        slab.setId(rs.getLong("slab_id"));
        // slab.setMeterWaterRates(meterWaterRates);
        slab.setTenantId(rs.getString("slab_tenantId"));
        slab.setFromUnit(rs.getLong("slab_fromunit"));
        slab.setToUnit(rs.getLong("slab_tounit"));
        slab.setUnitRate(rs.getDouble("slab_unitrate"));
        final List<Slab> slablist = new ArrayList<>();
        slablist.add(slab);
        meterWaterRates.setSlab(slablist);

        return meterWaterRates;
    }
}
