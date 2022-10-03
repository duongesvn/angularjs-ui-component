-- tồn & dư tài khoản theo các tháng
select 
    a_in.acfrom
    ,a_in.ym
    ,a_in.amount_in
    ,a_out.amount_out
    ,a_in.amount_in - a_out.amount_out _diff
from (
    
    select 
        strftime('%Y-%m',created_date) ym
        ,uuid_account acfrom
        ,sum(amount) amount_in
    from (
        select
            created_date
            ,amount
            ,uuid_account
        from exchange_book
        where exchange_type in ('IN','TTT')
        union 
        select 
            created_date
            ,amount
            ,uuid_account_to uuid_account
        from exchange_book
        where exchange_type = 'CH'
    )
    group by 
        strftime('%Y-%m',created_date)
        ,uuid_account 
) a_in
left join (

    select 
        strftime('%Y-%m',created_date) ym
        ,uuid_account acfrom
        ,sum(amount) amount_out
    from exchange_book
    where exchange_type in ('OUT','CH')
    group by 
        strftime('%Y-%m',created_date)
        ,uuid_account
) a_out on a_out.acfrom = a_in.acfrom and a_out.ym = a_in.ym;



---- danh sách chi tiêu
select 
    amount
    ,title
    ,description
from exchange_book
where 
    strftime('%Y-%m',created_date) = '2022-10'
    and exchange_type = 'OUT'
    and uuid_account = '12463a87-585a-47aa-a2c1-97a7c7a1b03d'
order by created_date;



----- tính số dư v2
select
    strftime('%Y-%m',created_date) month_year
    ,uuid_account
    ,sum(amount_n) credit_amount
from (
    select 
        created_date,
        uuid_account,
        amount,
        case 
            when exchange_type='IN' then amount
            when exchange_type='TTT' then amount
            when exchange_type='CH' then 0-amount
            when exchange_type='OUT' then 0-amount
        end amount_n
    from exchange_book 
    union 
    select 
        created_date,
        uuid_account_to uuid_account,
        amount,
        case 
            when exchange_type='CH' then amount
        end amount_n
    from exchange_book
    where exchange_type='CH'
) b
group by 
    strftime('%Y-%m',created_date)
    ,uuid_account 




