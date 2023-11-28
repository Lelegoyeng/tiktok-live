const axios = require('axios');

const url = "https://www.tiktok.com";

const headers = {
    "accept": "*/*",
    "accept-language": "id-ID,id;q=0.9",
    "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "tt_csrf_token=SuRulINA-aZlWvdkEds-qi5a3YAiKSPa9cGU; tt_chain_token=q5/6sWXi/qW/sxIg+AAFVg==; __tea_cache_tokens_1988={%22_type_%22:%22default%22%2C%22user_unique_id%22:%227306352592320890370%22%2C%22timestamp%22:1701142883090}; tiktok_webapp_theme=light; passport_csrf_token=07e268120195f29d429132a459e1b568; passport_csrf_token_default=07e268120195f29d429132a459e1b568; s_v_web_id=verify_lphsk2sa_1wFuPvgl_wrNv_4xCk_AbIs_H8HCH8yHbOfB; multi_sids=7231003581461120005%3Aa7b32e1c74cf3acb3b9dcf803f95c2fe; cmpl_token=AgQQAPOgF-RO0rRnQdWqo508_wT5y3qVv4ArYNMHiA; passport_auth_status=9b53b93708ffb4c60b6ec5aad87904a5%2C; passport_auth_status_ss=9b53b93708ffb4c60b6ec5aad87904a5%2C; sid_guard=a7b32e1c74cf3acb3b9dcf803f95c2fe%7C1701142818%7C15552000%7CSun%2C+26-May-2024+03%3A40%3A18+GMT; uid_tt=d83f55b2d37c578b3244cdaf3d822986a98dcde42a5f40719b5e225158f6c326; uid_tt_ss=d83f55b2d37c578b3244cdaf3d822986a98dcde42a5f40719b5e225158f6c326; sid_tt=a7b32e1c74cf3acb3b9dcf803f95c2fe; sessionid=a7b32e1c74cf3acb3b9dcf803f95c2fe; sessionid_ss=a7b32e1c74cf3acb3b9dcf803f95c2fe; sid_ucp_v1=1.0.0-KDllNzQyNWUzNzNmZTg3YTJiZmMzNWYzMjQ5ZTU1NmQ4NjE3MjAzNmUKHwiFiMWUou7rrGQQosKVqwYYswsgDDCT3-aiBjgIQBIQAxoGbWFsaXZhIiBhN2IzMmUxYzc0Y2YzYWNiM2I5ZGNmODAzZjk1YzJmZQ; ssid_ucp_v1=1.0.0-KDllNzQyNWUzNzNmZTg3YTJiZmMzNWYzMjQ5ZTU1NmQ4NjE3MjAzNmUKHwiFiMWUou7rrGQQosKVqwYYswsgDDCT3-aiBjgIQBIQAxoGbWFsaXZhIiBhN2IzMmUxYzc0Y2YzYWNiM2I5ZGNmODAzZjk1YzJmZQ; store-idc=maliva; store-country-code=id; store-country-code-src=uid; tt-target-idc=alisg; tt-target-idc-sign=lWU8yLka4M0m-WE0Hv6XkWa4dhNSM_82PbENuq_qovPFzC73oBo1nRuHdWsXdtE5LJOWgSv3wBa5qRsdkiey2IA2WUJhEITco0CllfxqoHIxe7mTlt6XkxPRrb3t5g1T0I1CYdttsziggSI8DVDMCSqbutkLprFr49TzNMWFoxUPigvrRQGn35Zlae7lSLf6ws6QZTq1yV2zVYObAR90ZHP-eXRFJgmsplOwlDQT1pXHoKH7aJKEge_31P2h4VFGTnIg0VAzeUGAkOAMzr6yAlMIn_GOwfcBjXlsYGTGTSpQBpUZ0idxj4niR-F0isGxjxeT8FmExRSSr3h-UFYXUuCJ1rLn7Bf-Ha3ppSra3g0YTdyoY54MRd2XTRi-_IsgfQgYEyziRodjG_JSLdyxWuM1DTSxx4KW8MX0kgyhJxJ0I11L3rdLhBju8p_Ahf0hxBRs7NL5KKFF-bhl5K4FFVF2HpwQZoy9jV2RUGEkRi5P-hi25tqkJNTvFxvbzxvn; ttwid=1%7CbWNzwsu9GZegPz0eZbLR4R8BWkB2PmMclk08I-3cyRM%7C1701143356%7C0de320b6fd4e62921eb282dab873463861ccb999698c5d09885c10f6d5ed5dfb; odin_tt=85fe971f9b5e4b30c0d5c0ec63685e0af2a40fa0536d86ef0b71be971db9b8f88fb7daa4549e452d7b8a072937eadfd54325be2373e6e22b726f8c8486bac4d3e5e7d65f6418c537d34e77d65fe9349a; msToken=SIjunOub1uf1CB5hahVRwmZH3PTnNcdN6Ot9y2HNlzMGCF10GPZqZKvbfFPRslrErAXIdZypa6i9sZB4OSbdrD9ETrbMg84ks1vf9U-fhxT6Zss8cg7l2L9UixZWl_meXMruSz-wjs50RUT0; msToken=BzgR_Vu7RrfXhsZzQDa1unlrRvLPBiY3leCRAQy8F_k5AaBLZvRba-0QcDqZuH1fULJWqto_t2FwJJ41wKtNlb7uvccUoD2xJrTyVdYlwQHf3pCBFIT9; passport_fe_beating_status=true",
    "Referer": "https://www.tiktok.com/@snorlaxflaw",
    "Referrer-Policy": "strict-origin-when-cross-origin"
};

axios.get(url, {
    headers: headers,
})
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));

