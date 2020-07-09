// Compiled by ClojureScript 1.7.228 {}
goog.provide('lt_manager.state');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('alandipert.storage_atom');
if(typeof lt_manager.state.current_section !== 'undefined'){
} else {
lt_manager.state.current_section = reagent.core.atom.call(null,"Termine");
}
if(typeof lt_manager.state.default_appointment !== 'undefined'){
} else {
lt_manager.state.default_appointment = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),(new Date()),new cljs.core.Keyword(null,"price","price",22129180),(5000),new cljs.core.Keyword(null,"hours","hours",58380855),(1),new cljs.core.Keyword(null,"paid","paid",1195086102),false], null);
}
if(typeof lt_manager.state.default_private_client !== 'undefined'){
} else {
lt_manager.state.default_private_client = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"private","private",-558947994),true], null);
}
if(typeof lt_manager.state.default_institution !== 'undefined'){
} else {
lt_manager.state.default_institution = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"private","private",-558947994),false], null);
}
if(typeof lt_manager.state.new_earlier_appointment_active !== 'undefined'){
} else {
lt_manager.state.new_earlier_appointment_active = reagent.core.atom.call(null,false);
}
if(typeof lt_manager.state.new_earlier_appointment !== 'undefined'){
} else {
lt_manager.state.new_earlier_appointment = reagent.core.atom.call(null,lt_manager.state.default_appointment);
}
if(typeof lt_manager.state.new_later_appointment_active !== 'undefined'){
} else {
lt_manager.state.new_later_appointment_active = reagent.core.atom.call(null,false);
}
if(typeof lt_manager.state.new_later_appointment !== 'undefined'){
} else {
lt_manager.state.new_later_appointment = reagent.core.atom.call(null,lt_manager.state.default_appointment);
}
if(typeof lt_manager.state.new_appointment !== 'undefined'){
} else {
lt_manager.state.new_appointment = reagent.core.atom.call(null,lt_manager.state.default_appointment);
}
if(typeof lt_manager.state.new_appointment_active !== 'undefined'){
} else {
lt_manager.state.new_appointment_active = reagent.core.atom.call(null,false);
}
if(typeof lt_manager.state.selected_appointment !== 'undefined'){
} else {
lt_manager.state.selected_appointment = reagent.core.atom.call(null,null);
}
if(typeof lt_manager.state.new_private_client_active !== 'undefined'){
} else {
lt_manager.state.new_private_client_active = reagent.core.atom.call(null,false);
}
if(typeof lt_manager.state.new_private_client !== 'undefined'){
} else {
lt_manager.state.new_private_client = reagent.core.atom.call(null,lt_manager.state.default_private_client);
}
if(typeof lt_manager.state.new_institution_active !== 'undefined'){
} else {
lt_manager.state.new_institution_active = reagent.core.atom.call(null,false);
}
if(typeof lt_manager.state.new_institution !== 'undefined'){
} else {
lt_manager.state.new_institution = reagent.core.atom.call(null,lt_manager.state.default_institution);
}
if(typeof lt_manager.state.selected_client !== 'undefined'){
} else {
lt_manager.state.selected_client = reagent.core.atom.call(null,null);
}
if(typeof lt_manager.state.new_client_appointment !== 'undefined'){
} else {
lt_manager.state.new_client_appointment = reagent.core.atom.call(null,lt_manager.state.default_appointment);
}
if(typeof lt_manager.state.new_client_appointment_active !== 'undefined'){
} else {
lt_manager.state.new_client_appointment_active = reagent.core.atom.call(null,false);
}
if(typeof lt_manager.state.default_contact !== 'undefined'){
} else {
lt_manager.state.default_contact = cljs.core.PersistentArrayMap.EMPTY;
}
if(typeof lt_manager.state.new_contact_active !== 'undefined'){
} else {
lt_manager.state.new_contact_active = reagent.core.atom.call(null,false);
}
if(typeof lt_manager.state.new_contact !== 'undefined'){
} else {
lt_manager.state.new_contact = reagent.core.atom.call(null,lt_manager.state.default_contact);
}
if(typeof lt_manager.state.selected_contact !== 'undefined'){
} else {
lt_manager.state.selected_contact = reagent.core.atom.call(null,null);
}
if(typeof lt_manager.state.default_address !== 'undefined'){
} else {
lt_manager.state.default_address = cljs.core.PersistentArrayMap.EMPTY;
}
if(typeof lt_manager.state.new_address_active !== 'undefined'){
} else {
lt_manager.state.new_address_active = reagent.core.atom.call(null,false);
}
if(typeof lt_manager.state.new_address !== 'undefined'){
} else {
lt_manager.state.new_address = reagent.core.atom.call(null,lt_manager.state.default_address);
}
if(typeof lt_manager.state.selected_address !== 'undefined'){
} else {
lt_manager.state.selected_address = reagent.core.atom.call(null,null);
}
if(typeof lt_manager.state.selected_event !== 'undefined'){
} else {
lt_manager.state.selected_event = reagent.core.atom.call(null,null);
}
if(typeof lt_manager.state.selected_participant_event !== 'undefined'){
} else {
lt_manager.state.selected_participant_event = reagent.core.atom.call(null,null);
}
if(typeof lt_manager.state.default_event !== 'undefined'){
} else {
lt_manager.state.default_event = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"group","group",582596132),false,new cljs.core.Keyword(null,"participants","participants",673603367),cljs.core.PersistentVector.EMPTY], null);
}
if(typeof lt_manager.state.new_event_active !== 'undefined'){
} else {
lt_manager.state.new_event_active = reagent.core.atom.call(null,false);
}
if(typeof lt_manager.state.new_event !== 'undefined'){
} else {
lt_manager.state.new_event = reagent.core.atom.call(null,lt_manager.state.default_event);
}
if(typeof lt_manager.state.selected_participant !== 'undefined'){
} else {
lt_manager.state.selected_participant = reagent.core.atom.call(null,null);
}
if(typeof lt_manager.state.default_participant !== 'undefined'){
} else {
lt_manager.state.default_participant = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"group","group",582596132),false,new cljs.core.Keyword(null,"participants","participants",673603367),cljs.core.PersistentVector.EMPTY], null);
}
if(typeof lt_manager.state.new_participant_active !== 'undefined'){
} else {
lt_manager.state.new_participant_active = reagent.core.atom.call(null,false);
}
if(typeof lt_manager.state.new_participant !== 'undefined'){
} else {
lt_manager.state.new_participant = reagent.core.atom.call(null,lt_manager.state.default_event);
}
if(typeof lt_manager.state.selected_account !== 'undefined'){
} else {
lt_manager.state.selected_account = reagent.core.atom.call(null,null);
}
if(typeof lt_manager.state.default_account !== 'undefined'){
} else {
lt_manager.state.default_account = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),(new Date()),new cljs.core.Keyword(null,"price","price",22129180),(0),new cljs.core.Keyword(null,"category","category",-593092832),"",new cljs.core.Keyword(null,"subcategory","subcategory",-1171802998),""], null);
}
if(typeof lt_manager.state.new_account !== 'undefined'){
} else {
lt_manager.state.new_account = reagent.core.atom.call(null,lt_manager.state.default_account);
}
if(typeof lt_manager.state.new_account_active !== 'undefined'){
} else {
lt_manager.state.new_account_active = reagent.core.atom.call(null,false);
}
if(typeof lt_manager.state.new_account_key !== 'undefined'){
} else {
lt_manager.state.new_account_key = reagent.core.atom.call(null,null);
}
if(typeof lt_manager.state.bill_url !== 'undefined'){
} else {
lt_manager.state.bill_url = reagent.core.atom.call(null,"");
}
if(typeof lt_manager.state.today !== 'undefined'){
} else {
lt_manager.state.today = (new Date());
}
if(typeof lt_manager.state.finance_date_limit_upper !== 'undefined'){
} else {
lt_manager.state.finance_date_limit_upper = reagent.core.atom.call(null,lt_manager.state.today);
}
if(typeof lt_manager.state.finance_date_limit_lower !== 'undefined'){
} else {
lt_manager.state.finance_date_limit_lower = reagent.core.atom.call(null,(new Date((new Date()).setMonth((lt_manager.state.today.getMonth() - (3))))));
}
if(typeof lt_manager.state.search !== 'undefined'){
} else {
lt_manager.state.search = reagent.core.atom.call(null,"");
}
lt_manager.state.appointments = alandipert.storage_atom.local_storage.call(null,reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"4","4",-1197948085),new cljs.core.Keyword(null,"7","7",993885869),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"8","8",1405994928),new cljs.core.Keyword(null,"9","9",1664767314),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"5","5",538911032),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.Keyword(null,"6","6",-1107752709)],[new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),(new Date((2016),(4),(15))),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"1000","1000",1827597961),new cljs.core.Keyword(null,"price","price",22129180),(3035),new cljs.core.Keyword(null,"hours","hours",58380855),(1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),(new Date((2016),(6),(25))),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"1003","1003",637519598),new cljs.core.Keyword(null,"price","price",22129180),(3534),new cljs.core.Keyword(null,"hours","hours",58380855),(3)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),(new Date((2016),(3),(11))),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"1000","1000",1827597961),new cljs.core.Keyword(null,"price","price",22129180),(2536),new cljs.core.Keyword(null,"hours","hours",58380855),(3)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"date","date",-1463434462),(new Date((2016),(6),(22))),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"0","0",351625802),new cljs.core.Keyword(null,"price","price",22129180),(5432),new cljs.core.Keyword(null,"hours","hours",58380855),(2),new cljs.core.Keyword(null,"account-id","account-id",-860833743),new cljs.core.Keyword(null,"2","2",-1645882217)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"date","date",-1463434462),(new Date((2016),(6),(25))),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"price","price",22129180),(5472),new cljs.core.Keyword(null,"hours","hours",58380855),(2),new cljs.core.Keyword(null,"account-id","account-id",-860833743),new cljs.core.Keyword(null,"1","1",-521621649)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),(new Date((2016),(6),(11))),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"1001","1001",1769419008),new cljs.core.Keyword(null,"price","price",22129180),(3252),new cljs.core.Keyword(null,"hours","hours",58380855),(3)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"date","date",-1463434462),(new Date((2016),(3),(21))),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"1002","1002",-1071371293),new cljs.core.Keyword(null,"price","price",22129180),(2553),new cljs.core.Keyword(null,"hours","hours",58380855),(2),new cljs.core.Keyword(null,"account-id","account-id",-860833743),new cljs.core.Keyword(null,"0","0",351625802)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),(new Date((2015),(0),(6))),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"1000","1000",1827597961),new cljs.core.Keyword(null,"price","price",22129180),(1183),new cljs.core.Keyword(null,"hours","hours",58380855),(5)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),(new Date((2016),(5),(3))),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"1002","1002",-1071371293),new cljs.core.Keyword(null,"price","price",22129180),(4576),new cljs.core.Keyword(null,"hours","hours",58380855),(2)], null)])),new cljs.core.Keyword(null,"appointments","appointments",1033586734));
lt_manager.state.events = alandipert.storage_atom.local_storage.call(null,reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"0","0",351625802),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"VortragZ",new cljs.core.Keyword(null,"group","group",582596132),false,new cljs.core.Keyword(null,"participants","participants",673603367),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"0","0",351625802),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"2","2",-1645882217)], null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"2000","2000",-1692316449)], null),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"GruppeX",new cljs.core.Keyword(null,"group","group",582596132),true,new cljs.core.Keyword(null,"participants","participants",673603367),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"0","0",351625802),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"2","2",-1645882217)], null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"2000","2000",-1692316449)], null)], null)),new cljs.core.Keyword(null,"events","events",1792552201));
lt_manager.state.clients = alandipert.storage_atom.local_storage.call(null,reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"1000","1000",1827597961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Picard",new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"address-id","address-id",1186706344),new cljs.core.Keyword(null,"23","23",1065617898),new cljs.core.Keyword(null,"contact-ids","contact-ids",122289048),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"0","0",351625802),null], null), null)], null),new cljs.core.Keyword(null,"1001","1001",1769419008),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Riker",new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"address-id","address-id",1186706344),new cljs.core.Keyword(null,"43","43",1620713355),new cljs.core.Keyword(null,"contact-ids","contact-ids",122289048),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"1","1",-521621649),null], null), null)], null),new cljs.core.Keyword(null,"1002","1002",-1071371293),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Data",new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"address-id","address-id",1186706344),new cljs.core.Keyword(null,"75","75",389757224),new cljs.core.Keyword(null,"contact-ids","contact-ids",122289048),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"2","2",-1645882217),null], null), null)], null),new cljs.core.Keyword(null,"1003","1003",637519598),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Troi",new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"address-id","address-id",1186706344),new cljs.core.Keyword(null,"45","45",1882534628),new cljs.core.Keyword(null,"contact-ids","contact-ids",122289048),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"0","0",351625802),null], null), null)], null),new cljs.core.Keyword(null,"1004","1004",-1848569386),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Crusher",new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"address-id","address-id",1186706344),new cljs.core.Keyword(null,"23","23",1065617898),new cljs.core.Keyword(null,"contact-ids","contact-ids",122289048),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"1","1",-521621649),null], null), null)], null),new cljs.core.Keyword(null,"2000","2000",-1692316449),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Starfleet",new cljs.core.Keyword(null,"private","private",-558947994),false,new cljs.core.Keyword(null,"address-id","address-id",1186706344),new cljs.core.Keyword(null,"43","43",1620713355),new cljs.core.Keyword(null,"contact-ids","contact-ids",122289048),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"2","2",-1645882217),null], null), null)], null)], null)),new cljs.core.Keyword(null,"clients","clients",1436018090));
lt_manager.state.accounts = alandipert.storage_atom.local_storage.call(null,reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"0","0",351625802),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),(new Date((2017),(2),(12))),new cljs.core.Keyword(null,"price","price",22129180),(2553),new cljs.core.Keyword(null,"category","category",-593092832),"Privat"], null),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),(new Date((2017),(2),(12))),new cljs.core.Keyword(null,"price","price",22129180),(5472),new cljs.core.Keyword(null,"category","category",-593092832),"Gruppen",new cljs.core.Keyword(null,"subcategory","subcategory",-1171802998),"Starfleet"], null),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),(new Date((2017),(2),(15))),new cljs.core.Keyword(null,"price","price",22129180),(5432),new cljs.core.Keyword(null,"category","category",-593092832),"Sonstiges",new cljs.core.Keyword(null,"subcategory","subcategory",-1171802998),"Starfleet"], null),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),(new Date((2017),(2),(12))),new cljs.core.Keyword(null,"price","price",22129180),(-7799),new cljs.core.Keyword(null,"category","category",-593092832),"B\u00FCcher",new cljs.core.Keyword(null,"description","description",-1428560544),"Was zum lesen"], null),new cljs.core.Keyword(null,"4","4",-1197948085),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),(new Date((2017),(2),(28))),new cljs.core.Keyword(null,"price","price",22129180),(-2000),new cljs.core.Keyword(null,"category","category",-593092832),"B\u00FCromaterial",new cljs.core.Keyword(null,"description","description",-1428560544),"Papier"], null),new cljs.core.Keyword(null,"5","5",538911032),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),(new Date((2017),(2),(27))),new cljs.core.Keyword(null,"price","price",22129180),(-1550),new cljs.core.Keyword(null,"category","category",-593092832),"Spiele",new cljs.core.Keyword(null,"description","description",-1428560544),"Ein Lernspiel"], null)], null)),new cljs.core.Keyword(null,"accounts","accounts",-935308676));
lt_manager.state.contacts = alandipert.storage_atom.local_storage.call(null,reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"0","0",351625802),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Privat",new cljs.core.Keyword(null,"name","name",1843675177),"nvklf",new cljs.core.Keyword(null,"phone","phone",-763596057),"063581938",new cljs.core.Keyword(null,"email","email",1415816706),"sth@sth.de"], null),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Schule",new cljs.core.Keyword(null,"name","name",1843675177),"fewgr",new cljs.core.Keyword(null,"phone","phone",-763596057),"073520732",new cljs.core.Keyword(null,"email","email",1415816706),"mail@gmail.com"], null),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Arbeit",new cljs.core.Keyword(null,"name","name",1843675177),"vfifo",new cljs.core.Keyword(null,"phone","phone",-763596057),"0853027345",new cljs.core.Keyword(null,"email","email",1415816706),"ich@email.de"], null),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Mobil",new cljs.core.Keyword(null,"name","name",1843675177),"fewgr",new cljs.core.Keyword(null,"phone","phone",-763596057),"0220267921",new cljs.core.Keyword(null,"email","email",1415816706),"email@gmx.de"], null)], null)),new cljs.core.Keyword(null,"contacts","contacts",333503174));
lt_manager.state.addresses = alandipert.storage_atom.local_storage.call(null,reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"23","23",1065617898),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Rechnungsname",new cljs.core.Keyword(null,"street","street",1870012303),"Einestra\u00DFe 1",new cljs.core.Keyword(null,"city","city",-393302614),"Einestadt",new cljs.core.Keyword(null,"postal-code","postal-code",368585871),(76598)], null),new cljs.core.Keyword(null,"43","43",1620713355),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Rechnungsname",new cljs.core.Keyword(null,"street","street",1870012303),"Diestra\u00DFe 2",new cljs.core.Keyword(null,"city","city",-393302614),"Zweitestadt",new cljs.core.Keyword(null,"postal-code","postal-code",368585871),(55438)], null),new cljs.core.Keyword(null,"75","75",389757224),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Rechnungsname",new cljs.core.Keyword(null,"street","street",1870012303),"Dingsstra\u00DFe 3",new cljs.core.Keyword(null,"city","city",-393302614),"Anderestadt",new cljs.core.Keyword(null,"postal-code","postal-code",368585871),(76521)], null),new cljs.core.Keyword(null,"45","45",1882534628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Rechnungsname",new cljs.core.Keyword(null,"street","street",1870012303),"Sonestra\u00DFe 4",new cljs.core.Keyword(null,"city","city",-393302614),"Nocheinestadt",new cljs.core.Keyword(null,"postal-code","postal-code",368585871),(43897)], null)], null)),new cljs.core.Keyword(null,"addresses","addresses",-559529694));

//# sourceMappingURL=state.js.map