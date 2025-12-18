/**
    Author: Abiy Girma
        @ : abiysemail@gmail.com
    github: https://github.com/abiygirma/
      date: 2025-12-18 GC
*/
function convert_gc_to_ec(gc_date){
    let ethiopian_months = ['መስከረም','ጥቅምት','ህዳር','ታህሳስ','ጥር','የካቲት','መጋቢት','ሚያዝያ','ግንቦት','ሰኔ','ሐምሌ','ነሐሴ','ጳጉሜን'];
    let gc_date_ = new Date(gc_date);
    let gc_time = gc_date_.getTime();
    let day = "11";
    let year = gc_date_.getFullYear();
    
    if(gc_time < new Date(year + "-09-" + day).getTime()){
        year = year -1;
    }

    if(year % 4 == 3){
        day = "12";
    }

    let ec_year = year - 7;

    let meskerm_1 = year + "-09-" + day;
    meskerm_1 = new Date(meskerm_1).getTime();

    let diff_in_days = Math.floor((gc_time - meskerm_1)/(1000*60*60*24));
    let ec_month = parseInt(diff_in_days / 30) + 1;
    let ec_day = (diff_in_days % 30) + 1;
    
    // ጳጉሜን 6 መሆኑ ነዋ!
    if(diff_in_days < 0){
        ec_month = 13;
        ec_day = 6;
    }
   
    if(ec_day < 10)
        ec_day = '0' + ec_day;
    
    return ethiopian_months[ec_month-1] + ' ' + ec_day + ', ' + ec_year;
}
