var PROXY_CONTROLLER_ABI = [{"constant":true,"inputs":[],"name":"provider","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_attractionHandlerAddress","type":"address"},{"name":"_attractionKey","type":"bytes32"},{"name":"_admissionAddress","type":"address"}],"name":"getTicketsByAdmissionAddress","outputs":[{"name":"ticketKeys","type":"bytes32[]"},{"name":"exists","type":"bool[]"},{"name":"seatCounts","type":"uint256[]"},{"name":"admissionAddresses","type":"address[]"},{"name":"salesAgentKeys","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_organizationsAddress","type":"address"},{"name":"_addr","type":"address"}],"name":"isOrganizationMember","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_attractionHandlerAddress","type":"address"},{"name":"_attractionKey","type":"bytes32"},{"name":"_ticketKey","type":"bytes32"}],"name":"getAttrAddressAndTicketNonce","outputs":[{"name":"attractionAddress","type":"address"},{"name":"ticketNonce","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isVersionContract","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_attractionHandlerAddress","type":"address"},{"name":"_attractionKey","type":"bytes32"}],"name":"isAttrSellable","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_organizationsAddress","type":"address"},{"name":"_addr","type":"address"}],"name":"getOrganizationsNonce","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_organizationsAddress","type":"address"},{"name":"_organizationKey","type":"bytes32"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"createOrganization","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_attractionAddress","type":"address"},{"name":"_ticketKey","type":"bytes32"}],"name":"getAttrTicket","outputs":[{"name":"exist","type":"bool"},{"name":"seatCount","type":"uint256"},{"name":"admissionAddress","type":"address"},{"name":"salesAgentKey","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_organizationsAddress","type":"address"},{"name":"_addr","type":"address"}],"name":"isOrganizationAdmin","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isVersionLogic","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_attractionAddress","type":"address"},{"name":"_ticketKey","type":"bytes32"},{"name":"_seatCount","type":"uint256"},{"name":"_ticketNonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"setAttrSeatCount","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_attractionAddress","type":"address"},{"name":"_onSale","type":"bool"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"changeAttrSaleStatus","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_attractionAddress","type":"address"},{"name":"_ticketKey","type":"bytes32"},{"name":"_seatCount","type":"uint256"},{"name":"_admissionAddress","type":"address"},{"name":"_ticketNonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"createAttrTicket","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_attractionHandlerAddress","type":"address"},{"name":"_attractionKey","type":"bytes32"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"removeAttraction","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_attractionAddress","type":"address"},{"name":"_ticketKey","type":"bytes32"},{"name":"_admissionAddress","type":"address"},{"name":"_ticketNonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"setAttrAdmisionAddress","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"logic_v1","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_attractionAddress","type":"address"},{"name":"_ticketKey","type":"bytes32"},{"name":"_ticketNonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"removeAttrTicket","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_attractionHandlerAddress","type":"address"},{"name":"_attractionKey","type":"bytes32"},{"name":"_salesAgentKey","type":"bytes32"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"createAttraction","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_attractionAddress","type":"address"},{"name":"_addr","type":"address"}],"name":"getAttrTicketKey","outputs":[{"name":"ticketKeys","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_attractionHandlerAddress","type":"address"},{"name":"_attractionKey","type":"bytes32"},{"name":"_address","type":"address"}],"name":"getAttrAddressAndNonce","outputs":[{"name":"attractionAddress","type":"address"},{"name":"nonce","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_attractionHandlerAddress","type":"address"},{"name":"_addr","type":"address"}],"name":"getAttractionHandlerNonce","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_organizationsAddress","type":"address"},{"name":"_organizationKey","type":"bytes32"}],"name":"getOrganizationStatus","outputs":[{"name":"created","type":"bool"},{"name":"active","type":"bool"},{"name":"adminCount","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_organizationsAddress","type":"address"},{"name":"_addr","type":"address"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"addOrganizationMember","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_attractionAddress","type":"address"},{"name":"_salesAgentKey","type":"bytes32"}],"name":"isAttrSalesAgent","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_organizationsAddress","type":"address"},{"name":"_addr","type":"address"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"removeOrganizationMember","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_attractionAddress","type":"address"},{"name":"_promoterKey","type":"bytes32"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"setAttrPromoter","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_organizationsAddress","type":"address"},{"name":"_addr","type":"address"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"removeOrganizationAdmin","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_organizationsAddress","type":"address"},{"name":"_addr","type":"address"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"addOrganizationAdmin","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isVersionContractOrLogic","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_attractionHandlerAddress","type":"address"},{"name":"_attractionKey","type":"bytes32"},{"name":"_offset","type":"uint256"},{"name":"_limit","type":"uint256"}],"name":"getAttrAdmissionsAndSeatCounts","outputs":[{"name":"admissionAddresses","type":"address[]"},{"name":"seatCounts","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_attractionAddress","type":"address"},{"name":"_salesAgentKey","type":"bytes32"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"removeAttrSalesAgent","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_attractionAddress","type":"address"}],"name":"getAttrPromoterKey","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_organizationsAddress","type":"address"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"changeOrganizationActivation","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_attractionHandlerAddress","type":"address"},{"name":"_attractionKey","type":"bytes32"}],"name":"getAttractionAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"cns","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getContractName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getCns","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_attractionAddress","type":"address"},{"name":"_salesAgentKey","type":"bytes32"},{"name":"_nonce","type":"uint256"},{"name":"_clientSign","type":"bytes"}],"name":"addAttrSalesAgent","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_cns","type":"address"},{"name":"_logic_v1","type":"address"}],"payable":false,"type":"constructor"}];