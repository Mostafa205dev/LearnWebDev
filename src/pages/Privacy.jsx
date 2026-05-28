export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0f1117] text-slate-200">
      {/* Header */}
      <div className="text-center py-16 px-6 border-b border-white/10">
        <h1 className="text-3xl font-bold text-orange-400">
          Privacy Policy | سياسة الخصوصية
        </h1>
        <p className="text-slate-500 mt-3">
          كيف نحمي بياناتك داخل منصة NekhrogFeen
        </p>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        {/* Section 1 */}
        <div className="bg-[#161b27] border border-white/10 rounded-2xl p-6">
          <h2 className="text-orange-400 font-semibold mb-2">
            1. المعلومات التي نجمعها
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            نحن لا نجمع بيانات شخصية حساسة. يتم استخدام الموقع بشكل تعليمي فقط،
            وقد نقوم بتتبع بسيط لتحسين تجربة المستخدم مثل الصفحات الأكثر زيارة.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-[#161b27] border border-white/10 rounded-2xl p-6">
          <h2 className="text-orange-400 font-semibold mb-2">
            2. استخدام المعلومات
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            نستخدم المعلومات فقط لتحسين المحتوى وتجربة التعلم، ولا يتم بيع أو
            مشاركة أي بيانات مع أطراف خارجية.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-[#161b27] border border-white/10 rounded-2xl p-6">
          <h2 className="text-orange-400 font-semibold mb-2">
            3. ملفات تعريف الارتباط (Cookies)
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            قد يستخدم الموقع ملفات تعريف الارتباط لتخزين تفضيلات بسيطة مثل وضع
            العرض وتحسين الأداء.
          </p>
        </div>

        {/* Section 4 */}
        <div className="bg-[#161b27] border border-white/10 rounded-2xl p-6">
          <h2 className="text-orange-400 font-semibold mb-2">4. الأمان</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            نحن نحاول قدر الإمكان حماية الموقع من أي ثغرات أو استخدام غير آمن،
            ولكن لا يوجد نظام آمن 100%.
          </p>
        </div>

        {/* Section 5 */}
        <div className="bg-[#161b27] border border-white/10 rounded-2xl p-6">
          <h2 className="text-orange-400 font-semibold mb-2">5. التحديثات</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            قد يتم تحديث سياسة الخصوصية من وقت لآخر، وسيتم نشر أي تغييرات على
            هذه الصفحة.
          </p>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-slate-500 pt-6">
          آخر تحديث: 2026
        </p>
      </div>
    </div>
  );
}
