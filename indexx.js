function indanhsachsv(){
    const thanhvien=[
        {hovaten: 'nguyen viet khoi',gioitinh: 'nam',noisinh:'none'},
        {hovaten: 'nguyen huu huy',gioitinh: 'nam',noisinh:'none'},
        {hovaten: 'nguyen van loi',gioitinh: 'nam',noisinh:'none'},
        {hovaten: 'nguyen ngoc phuoc',gioitinh: 'nam',noisinh:'none'},
        {hovaten: 'nguyen van bang',gioitinh: 'nam',noisinh:'none'},
        {hovaten: 'giap ngoc duy anh',gioitinh: 'nam',noisinh:'none'},
        {hovaten: 'truong minh son',gioitinh: 'nam',noisinh:'none'},
    ];
 
 const danhSach = document.getElementById('danhsachsv');

   thanhvien.forEach((tv) => { 
       const div = document.createElement('div');
       div.className = 'thanh-vien';
       div.innerHTML = `
           <table style="width: 100%; border-spacing: 1px 1px;">
               <tr>
                   <td style="font-weight: bold; width: 30%;">Họ và tên:</td>
                   <td>${tv.hovaten}</td>
               </tr>
               <tr>
                   <td style="font-weight: bold;">Giới tính:</td>
                   <td>${tv.gioitinh}</td>
               </tr>
               <tr>
                   <td style="font-weight: bold;">Nơi sinh:</td>
                   <td>${tv.noisinh}</td>
               </tr>
           </table>
       `;

       // Thêm CSS để tạo giao diện đẹp hơn
       div.style.marginBottom = '10px'; // Khoảng cách giữa các div
       div.style.padding = '10px'; // Khoảng cách bên trong
       div.style.background = '#f9f9f9'; // Màu nền
       div.style.borderRadius = '1px'; // Bo góc nhẹ

       danhSach.appendChild(div); // thêm phần tử div vào danhsach
   });
  

}
 
 indanhsachsv();