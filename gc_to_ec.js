function convert_gc_to_ec(gc_date){
    let ethiopian_months = ['መስከረም','ጥቅምት','ህዳር','ታህሳስ','ጥር','የካቲት','መጋቢት','ሚያዝያ','ግንቦት','ሰኔ','ሐምሌ','ነሐሴ','ጳጉሜን'];
    let gc_date_ = new Date(gc_date);
    let gc_time = gc_date_.getTime();
    let day = "11";
    let year = <?= date('Y') ?>;
    year = gc_date_.getFullYear();
    if(year % 4 == 3){
        day = "12";
    }

    if(gc_time < new Date(year + "-09-" + day).getTime()){
        year = year -1;
    }

    let meskerm_1 = year + "-09-" + day;
    meskerm_1 = new Date(meskerm_1).getTime();

    let diff_in_days = Math.floor((gc_time - meskerm_1)/(1000*60*60*24));
    let ec_month = parseInt(diff_in_days / 30) + 1;
    let ec_year = year - 7;
    let ec_day = (diff_in_days % 30) + 1;
    
    return ethiopian_months[ec_month-1] + ' ' + ec_day + ', ' + ec_year;
}
